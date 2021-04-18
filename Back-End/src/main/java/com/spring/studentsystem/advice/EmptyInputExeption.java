package com.spring.studentsystem.advice;

import org.springframework.web.bind.annotation.ExceptionHandler;

public class EmptyInputExeption extends RuntimeException {

    public EmptyInputExeption() {
    }
}

