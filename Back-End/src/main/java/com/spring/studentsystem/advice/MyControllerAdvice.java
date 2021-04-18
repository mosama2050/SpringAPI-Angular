package com.spring.studentsystem.advice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.NoSuchElementException;


@ControllerAdvice
public class MyControllerAdvice {

    @ExceptionHandler(EmptyInputExeption.class)
    public ResponseEntity<String> handelEmptyInputExeption (EmptyInputExeption emptyInputExeption){
        return new ResponseEntity<String>("input field is Empty ", HttpStatus.BAD_REQUEST);

    }

@ExceptionHandler(NoSuchElementException.class)
public ResponseEntity<String> handelNoSuchElementException (NoSuchElementException noSuchElementException){
    return new ResponseEntity<String>("No value in DB change your Student id ", HttpStatus.NOT_FOUND);

}

}
