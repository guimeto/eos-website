create table station
(
    id          int auto_increment
        primary key,
    name        tinytext             not null,
    dir_name    tinytext             not null,
    meteograms  tinyint(1) default 0 not null,
    radar       tinyint(1) default 0 not null,
    disdrometer tinyint(1) default 0 not null,
    ceilometer tinyint(1) default 0 not null
);

