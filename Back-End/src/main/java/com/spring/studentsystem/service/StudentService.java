package com.spring.studentsystem.service;


import com.spring.studentsystem.advice.EmptyInputExeption;
import com.spring.studentsystem.doa.StudentRepository;
import com.spring.studentsystem.model.Student;
import javafx.scene.control.Pagination;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;


import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class StudentService {
    private StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents(int page,int size){
        Pageable pageable =  PageRequest.of(page,size);
        return studentRepository.findAll( pageable).getContent();
    }
    public Student getStudentById (Long id){
               return studentRepository.findById(id).get();
    }
    public Student saveStudent(Student student){

        if (student.getFullName().isEmpty() || student.getFullName().length()==0){
            throw new EmptyInputExeption();
        }
        return studentRepository.save(student);
    }
    public Student editStudent(Student student){
        return studentRepository.save(student);
    }

    public void removeStudent( Long id){
        studentRepository.deleteById(id);
    }
    public List<Student> findByFullName(String fullname,int page ,int size){
        Pageable pageable = PageRequest.of(page,size);
        return this.studentRepository.findByFullNameContaining(fullname,pageable);
    }
    public Long getStudentsLength(){
        return studentRepository.getStudentsLength();
    }
    public Long getStudentsLengthByName(String name){return  studentRepository.getStudentsLengthByName(name);};
}