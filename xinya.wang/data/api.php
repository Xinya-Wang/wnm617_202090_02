<?php


function makeConn() {
    include_once "auth.php";
    try {
        $conn = new PDO(...Auth());
        $conn->setAttribute(
            PDO::ATTR_ERRMODE,
            PDO::ERRMODE_EXCEPTION
        );
    }catch(PDOException $e) {
        die($e->getMessage());
    }
    return $conn;
}


function fetchAll($r) {
    $a = [];
    while($row = $r->fetch(PDO::FETCH_OBJ))
        $a[] = $row;
    return $a;
}


// connection, prepared statement, parameters
function makeQuery($c,$ps,$p) {
    try {
        if(count($p)) {
            $stmt = $c->prepare($ps);
            $stmt->execute($p);
        } else {
            $stmt = $c->query($ps);
        }

    $r = fetchAll($stmt);

    return [
        "result"=>$r
    ];

    } catch(PDOException $e) {
        return [
            "error"=>"Query Failed: ".$e->getMessage()
        ];
    }
}





function makeUpload($file,$folder) {
    $filename = microtime(true) . "_" . $_FILES[$file]['name'];

    if(@move_uploaded_file(
        $_FILES[$file]['tmp_name'],
        $folder.$filename
    )) return ['result'=>$filename];
    else return [
        "error"=>"File Upload Failed",
        "_FILES"=>$_FILES,
        "filename"=>$filename
    ];
}






function makeStatement($data){
    $c = makeConn(); //connect
    //The @ symbol suppressed warnings not errors.
    $t = @$data->type; //type
    $p = @$data->params;//parameters 


    //tell bank-end, what type of query, we want to make
    switch ($t) {
        case 'users_all':
            return makeQuery($c, "SELECT * FROM `track_users`",[]);
        case 'animals_all':
            return makeQuery($c, "SELECT * FROM `track_animals`",[]);
        case 'locations_all':
            return makeQuery($c, "SELECT * FROM `track_locations`",[]);


        case 'user_by_id':
            return makeQuery($c, "SELECT * FROM `track_users` WHERE `id` = ?",$p);
        case 'animal_by_id':
            return makeQuery($c, "SELECT * FROM `track_animals` WHERE `id` = ?",$p);
        case 'location_by_id':
            return makeQuery($c, "SELECT * FROM `track_locations` WHERE `id` = ?",$p);


        case 'animals_by_user_id':
            return makeQuery($c, "SELECT * FROM `track_animals` WHERE `user_id` = ?",$p);
        case 'locations_by_animal_id':
            return makeQuery($c, "SELECT * FROM `track_locations` WHERE `animal_id` = ?",$p);


        case "check_signin":
            return makeQuery($c,"SELECT * FROM `track_users` WHERE `email` = ? AND `password` = md5(?)",$p);



        case "recent_locations":
            return makeQuery($c,"SELECT * FROM
                `track_animals` a
            LEFT JOIN (
                SELECT * FROM `track_locations`
                ORDER BY `date_create` DESC
            ) l
            ON a.id = l.animal_id
            WHERE user_id = ?
            GROUP BY l.animal_id
            ",$p);

        case "most_tracked_by_user_id":
            return makeQuery($c,"SELECT name,count(*) FROM 
                `track_animals` a 
            LEFT JOIN ( 
                SELECT * FROM `track_locations` 
                ORDER BY `date_create` DESC 
            ) l ON a.id = l.animal_id 
            WHERE user_id = ?
            GROUP BY l.animal_id 
            ORDER BY `count(*)` DESC
            ",$p);


        case "all_animal_location_by_user_id":
            return makeQuery($c,"SELECT * FROM
                `track_animals` a
            LEFT JOIN (
                SELECT * FROM `track_locations`
                ORDER BY `date_create` DESC
            ) l
            ON a.id = l.animal_id
            WHERE `user_id` = ? AND `lat` IS NOT NULL 
            ORDER BY l.date_create DESC
            ",$p);


        case "search_animals":
            $p = ["%$p[0]%",$p[1]];
            return makeQuery($c,"SELECT * FROM
            `track_animals`
            WHERE 
                `name` LIKE ?
                AND user_id = ? 
            ",$p);


        case "animal_search_recent":
            $p = ["%$p[0]%",$p[1]];
            return makeQuery($c,"SELECT * FROM
            `track_animals` a
            LEFT JOIN (
                SELECT * FROM `track_locations`
                ORDER BY `date_create` DESC
            ) l
            ON a.id = l.animal_id
            WHERE 
                a.name LIKE ?
                AND a.user_id = ?
            GROUP BY l.animal_id
            ",$p);


        case "animal_filter": 
            return makeQuery($c,"SELECT * FROM
            `track_animals`
            WHERE 
                `$p[0]` = ?
                AND user_id = ? 
            ",[$p[1],$p[2]]);


        //SELECT DAY(date_create) FROM `track_locations` WHERE `animal_id` = 1
       

        //CRUD

        //INSERT
        case "insert_user":
            $r =  makeQuery($c,"SELECT * FROM `track_users` WHERE `username` = ? OR `email` = ?",[$p[0],$p[1]]);

            if(count($r['result'])) return['error'=>"Username or Email already exists"];

            $r = makeQuery($c, "INSERT INTO 
                `track_users`
                (`username`,`email`,`password`,`img`,`date_create`)
                VALUES
                (?,?,md5(?),'https://via.placeholder.com/400/?text=USER', NOW()) 
                ",$p,false);
            return ["id"=>$c->lastInsertId()];


        case 'insert_animal':
            $r = makeQuery($c, "INSERT INTO 
                `track_animals`
                (`user_id`,`name`,`color`,`description`,`img`,`date_create`)
                VALUES
                (?,?,?,?,?, NOW()) 
                ",$p,false);
            return ["id"=>$c->lastInsertId()];

        case 'insert_location':
            $r = makeQuery($c, "INSERT INTO 
                `track_locations`
                (`animal_id`,`lat`,`lng`,`description`,`photo`,`icon`,`date_create`)
                VALUES
                (?,?,?,?,?,'https://via.placeholder.com/100/?text=ICON', NOW()) 
                ",$p,false);
            return ["id"=>$c->lastInsertId()];


        //UPDATE STATEMENTS
        case 'update_user':
            $r = makeQuery($c, "UPDATE
                `track_users`
                SET
                `name` = ?,
                `username`= ?,
                `bio` = ?,
                `phone`= ?,
                `gender` = ?
                WHERE `id` = ?
                ",$p,false);
            return ["result"=>"success"];

        case 'update_user_basic_info':
            $r = makeQuery($c, "UPDATE
                `track_users`
                SET
                `name` = ?,
                `bio` = ?,
                `img` = ?
                WHERE `id` = ?
                ",$p,false);
            return ["result"=>"success"];  

        case 'update_user_image':
            $r = makeQuery($c, "UPDATE
                `track_users`
                SET
                `img` = ?
                WHERE `id` = ?
                ",$p,false);
            return ["result"=>"success"];    

        case 'update_animal':
            $r = makeQuery($c, "UPDATE
                `track_animals`
                SET
                `name` = ?,
                `color`= ?,
                `description`= ?,
                `img`= ?
                WHERE `id` = ?
                ",$p,false);
            return ["result"=>"success"]; 



        //DELETE STATEMENTS
        case 'delete_animal':
            $r = makeQuery($c, "DELETE FROM `track_animals` WHERE `id` = ?",$p,false);
            return ["result"=>"success"]; 

        case 'delete_location':
            $r = makeQuery($c, "DELETE FROM `track_locations` WHERE `id` = ?",$p,false);
            return ["result"=>"success"]; 


        default: return ["error"=>"No Matched type"];
   }
}



if(!empty($_FILES)) {
    $r = makeUpload("image","../uploads/");
    die(json_encode($r));
}


$data = json_decode(file_get_contents("php://input"));


echo json_encode(
    makeStatement($data),
    JSON_NUMERIC_CHECK
);













