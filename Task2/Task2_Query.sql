WITH RecursiveSubdivisions AS (
    SELECT id, name, parent_id, 0 AS sub_level
    FROM subdivisions
    WHERE id = (
        SELECT subdivision_id
        FROM collaborators
        WHERE id = 710253
    )
    UNION ALL
    SELECT s.id, s.name, s.parent_id, rs.sub_level + 1
    FROM subdivisions s
    INNER JOIN RecursiveSubdivisions rs ON s.parent_id = rs.id
), CollaboratorsCount AS (
    SELECT subdivision_id, COUNT(*) AS colls_count
    FROM collaborators
    GROUP BY subdivision_id
)
SELECT c.id, c.name, rs.name AS sub_name, rs.id AS sub_id, rs.sub_level,
    ISNULL(cc.colls_count, 0) AS colls_count
FROM collaborators c
INNER JOIN RecursiveSubdivisions rs ON c.subdivision_id = rs.id
LEFT JOIN CollaboratorsCount cc ON c.subdivision_id = cc.subdivision_id
WHERE c.age < 40 AND c.subdivision_id NOT IN (100055, 100059)
ORDER BY rs.sub_level;
