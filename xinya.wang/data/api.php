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

        // case 'latest_each_animal_location_by_date_created':
        //     return makeQuery($c, "SELECT * FROM track_locations WHERE id in(select SUBSTRING_INDEX(group_concat(id order by 'date_create' desc),',',1) from 'track_locations' group by animal_id) order by 'date_create' desc",$p);

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
            
   
        case "check_signin":
            return makeQuery($c,"SELECT * FROM `track_users` WHERE `username` = ? AND `password` = md5(?)",$p);

        default: return ["error"=>"No Matched type"];
   }
}



$data = json_decode(file_get_contents("php://input"));


echo json_encode(
    makeStatement($data),
    JSON_NUMERIC_CHECK
);


