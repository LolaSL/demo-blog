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
   uid INTEGER not null, primary key (id),
   category VARCHAR(255) null,
   constraint uid foreign key (uid) references users(id) on delete cascade on update cascade
); 
    -- CREATE UNIQUE INDEX uid_idx ON posts (uid);
INSERT INTO posts(title, description, img, slug,  uid ) VALUES( 'Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a tellus elit. Suspendisse lobortis quis risus ut vulputate. Proin fermentum est nec libero efficitur, rhoncus aliquam nulla facilisis. Cras vulputate vehicula eros. Ut lacinia purus eros, sed tristique est fringilla sit amet. In hendrerit ipsum ex, condimentum tincidunt purus mollis at. Mauris suscipit cursus bibendum. Ut rhoncus purus leo, nec malesuada lorem lobortis et.', 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'first-post',  1);
INSERT INTO posts(title, description, img, slug,  uid ) VALUES( 'Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a tellus elit. Suspendisse lobortis quis risus ut vulputate. Proin fermentum est nec libero efficitur, rhoncus aliquam nulla facilisis. Cras vulputate vehicula eros. Ut lacinia purus eros, sed tristique est fringilla sit amet. In hendrerit ipsum ex, condimentum tincidunt purus mollis at. Mauris suscipit cursus bibendum. Ut rhoncus purus leo, nec malesuada lorem lobortis et.', 'https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'first-post', 2);
INSERT INTO posts(title, description, img, slug,  uid ) VALUES( 'Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a tellus elit. Suspendisse lobortis quis risus ut vulputate. Proin fermentum est nec libero efficitur, rhoncus aliquam nulla facilisis. Cras vulputate vehicula eros. Ut lacinia purus eros, sed tristique est fringilla sit amet. In hendrerit ipsum ex, condimentum tincidunt purus mollis at. Mauris suscipit cursus bibendum. Ut rhoncus purus leo, nec malesuada lorem lobortis et.', 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'first-post', 3);
INSERT INTO posts(title, description, img, slug,  uid ) VALUES( 'Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a tellus elit. Suspendisse lobortis quis risus ut vulputate. Proin fermentum est nec libero efficitur, rhoncus aliquam nulla facilisis. Cras vulputate vehicula eros. Ut lacinia purus eros, sed tristique est fringilla sit amet. In hendrerit ipsum ex, condimentum tincidunt purus mollis at. Mauris suscipit cursus bibendum. Ut rhoncus purus leo, nec malesuada lorem lobortis et.', 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'first-post',  4);

INSERT INTO users(name, email, password) VALUES( Test5, 5);