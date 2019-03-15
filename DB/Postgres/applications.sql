
CREATE TABLE applications (
 customerId SERIAL PRIMARY KEY,
 name text NOT NULL,
 emailId text NOT NULL,
 createdDate date NOT NULL,
 modifiedDate date NOT NULL,
 applicationType text NOT NULL,
 status text NOT NULL
);