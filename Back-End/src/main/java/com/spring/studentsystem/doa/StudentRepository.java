package com.spring.studentsystem.doa;


import com.spring.studentsystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@CrossOrigin("http://localhost:4200")
@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {
    public List<Student> findByFullNameContaining(String fullname);

}