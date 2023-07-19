INSERT INTO department (name)
VALUES ('Administrative'),
       ('Game Design'),
       ('Programming'),
       ('Production'),
       ('IT/DevOps'),
       ('UI/UX'),
       ('QA');

INSERT INTO role (title, salary, department_id)
VALUES ('Finance Director', 146700, 1),
       ('Finance Manager', 125400, 1),
       ('Game Director', 120000, 2),
       ('Senior Technical Designer', 118600, 2),
       ('Level/Environment Designer', 90600, 2),
       ('Game Systems Programmer', 109400, 3),
       ('Audio Programmer', 109400, 3),
       ('Senior Producer', 119000, 4),
       ('Producer - Live Ops', 99300, 4),
       ('Senior Systems Administrator', 98600, 5),
       ('Helpdesk Technician - Level 1', 67200, 5),
       ('Senior UI Designer', 125000, 6),
       ('UI Technical Designer', 95000, 6),
       ('QA R&D Programmer', 56800, 7),
       ('QA Tester/Development Support', 34560, 7);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Tyler', 'Nisal', 1),
       ('Carrie', 'Sanchez', 1),
       ('Neil', 'Druckmann', 2),
       ('Alex', 'Runa', 2),
       ('David', 'Saas', 2),
       ('Lidia', 'Mun', 3),
       ('Nora', 'Drinis', 3),
       ('Sara', 'Platt', 4),
       ('Miki', 'Senu', 4),
       ('Todd', 'Tippetts', 5),
       ('Ian', 'Safran', 5),
       ('Clay', 'Mathews', 6),
       ('Brandon', 'Sulva', 6),
       ('Evan', 'Gallant', 7),
       ('Ryan', 'Turner', 7);
