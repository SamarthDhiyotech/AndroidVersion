
SELECT * FROM t_user

select * from T_USER

select * from public.t_mpg_user_role
SELECT * FROM oauth_access_token
select * from oauth_access_token

CREATE TABLE oauth_access_token (
    token_id VARCHAR(256) PRIMARY KEY,
    token BYTEA
);

select * from oauth_access_token

INSERT INTO oauth_access_token (token_id, token)
VALUES ('9573413341', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5NTczNDEzMzQxIiwiaXNfdXNlcl9yZWdpc3RlcmVkIjp0cnVlLCJleHAiOjE3MjIzNjc2NzgsImlhdCI6MTcyMjMzMTY3OH0.aF2J_1Yzv4oI9E9X56csejpSh2U1_-aZv1F04swvEc0'::bytea);


DELETE FROM oauth_access_token WHERE token_id = 'sample_token_id';

SELECT token_id, encode(token, 'escape') AS token
FROM oauth_access_token
WHERE token_id = 'sample_token_id';

SELECT * FROM oauth_access_token WHERE token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5NTczNDEzMzQxIiwiaXNfdXNlcl9yZWdpc3RlcmVkIjp0cnVlLCJleHAiOjE3MjIzNjc2NzgsImlhdCI6MTcyMjMzMTY3OH0.aF2J_1Yzv4oI9E9X56csejpSh2U1_-aZv1F04swvEc0';


drop table oauth_access_token

