create table users(
  id serial primary key not null,
  name varchar(50) not null,
  email varchar(255) unique not null,
  password varchar(255) not null,
  img varchar(255) null,
  created_at date default current_date
);

create table posts(
  id SERIAL  not null,
  title varchar(50) not null,
  description varchar(1050)  not null,
  img varchar(255) not null,
  slug varchar(255) not null,
  created_at date default current_date,
  uid_idx int not null,
   uid INTEGER not null, primary key (id),
   category VARCHAR(255) null,
   constraint uid foreign key (uid) references users(id) on delete cascade on update cascade
); 
    CREATE UNIQUE INDEX uid_idx ON posts (uid);
