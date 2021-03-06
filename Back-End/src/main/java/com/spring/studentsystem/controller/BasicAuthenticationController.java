package com.spring.studentsystem.controller;

import com.spring.studentsystem.model.AuthenticationBean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:4200")
@RestController
public class BasicAuthenticationController {
    Logger logger = LoggerFactory.getLogger(BasicAuthenticationController.class);

    @GetMapping("/basicauth")
    public AuthenticationBean BasicAuthentication(){
        return new AuthenticationBean("you are Authentication");
    }

    @GetMapping("/main")
    public String Main(){
        logger.error("get All Students");
        return "yes";
    }
}
