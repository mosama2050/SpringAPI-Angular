package com.spring.studentsystem.config;
import com.spring.studentsystem.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.springframework.http.HttpMethod;

@Configuration
public class ConfigureRepositoryRestConfigration implements RepositoryRestConfigurer {

    private EntityManager entityManager;

    @Autowired
    public ConfigureRepositoryRestConfigration(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] unsupported = {HttpMethod.GET,HttpMethod.POST,HttpMethod.DELETE,HttpMethod.PUT};
        displeHttpMethod(Student.class,config,unsupported);
        exposeIds(config);
    }


    public void displeHttpMethod(Class theClass, RepositoryRestConfiguration config, HttpMethod[] unsupportedMethod) {
        config.getExposureConfiguration()
                .forDomainType(theClass)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(unsupportedMethod)))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedMethod));
    }

    public void exposeIds(RepositoryRestConfiguration config){
        // - get a list of all entity classes from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();

        // - create an array of the entity types
        List<Class> entityClasses = new ArrayList<>();

        // - get the entity types for the entities
        for (EntityType tempEntityType : entities) {
            entityClasses.add(tempEntityType.getJavaType());
        }

        // - expose the entity ids for the array of entity/domain types
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);
    }
}