INSERT INTO departments (department)
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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Tyler', 'Nisal', 1, null),
       ('Carrie', 'Sanchez', 2, 1),
       ('Neil', 'Druckmann', 3, null),
       ('Alex', 'Runa', 4, 3),
       ('David', 'Saas', 5, 3),
       ('Lidia', 'Mun', 6, null),
       ('Nora', 'Drinis', 7, null),
       ('Sara', 'Platt', 8, null),
       ('Miki', 'Senu', 9, 8),
       ('Todd', 'Tippetts', 10, null),
       ('Ian', 'Safran', 11, 10),
       ('Clay', 'Mathews', 12, null),
       ('Brandon', 'Sulva', 13, 12),
       ('Evan', 'Gallant', 14, null),
       ('Ryan', 'Turner', 15, 14);
