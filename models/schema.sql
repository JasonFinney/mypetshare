drop database pets_db;

create database pets_db;

use pets_db;

create table users
(
    user_id INT(10)
    auto_increment,
    user_email varchar
    (255),
    user_password varchar
    (30) NOT NULL,
    first_name varchar
    (255) NOT NULL,
    last_name varchar
    (255) NOT NULL,
    home_address_1 varchar
    (255) NOT NULL,
    home_address_2 varchar
    (255),
    home_city varchar
    (255) NOT NULL,
    home_state varchar
    (2) NOT NULL,
    home_zipcode varchar
    (255) NOT NULL,
    credit_numb int
    (12) NOT NULL,
    pet_id int
    (10),
    sub_id int
    (10),
    crd_id int
    (64),
    primary key
    (user_id)
    
);

    create table pets
    (
        pet_id INT(10)
        auto_increment,
    user_id INT NOT NULL,
    pet_name varchar
        (255),
    pet_type varchar
        (255),
    pet_breed varchar
        (255),
    pet_picture_url varchar
        (255),
	service_animal BOOLEAN,
    FOREIGN KEY
        (user_id) 
		REFERENCES users
        (user_id)
        ON
        DELETE CASCADE,
    primary key(pet_id)
        ) ENGINE= InnoDB;

        create table subscriptions
        (
            sub_id INT(10)
            auto_increment,
    user_id INT
            (10) NOT NULL,
    sub_name varchar
            (255),
    food_sub_gourmet BOOL,
    food_sub_wet BOOL,
    food_sub_dry BOOL,
    groom_sub_prem BOOL,
    groom_sub_mid BOOL,
    groom_sub_low BOOL,
    walk_sub INTEGER,
    sit_sub INTEGER,
    FOREIGN KEY
            (sub_id)
		REFERENCES users
            (user_id)
        ON
            DELETE CASCADE,
	PRIMARY KEY(sub_id)

            );

            create table crdtbl
            (
                crd_id INTEGER(64)
                auto_increment,
	crd_nm BINARY
                (16),
    user_id INTEGER
                (10) NOT NULL,
    FOREIGN KEY
                (crd_id)
		REFERENCES users
                (user_id)
        ON
                DELETE CASCADE,
	PRIMARY KEY(crd_id)
                )
