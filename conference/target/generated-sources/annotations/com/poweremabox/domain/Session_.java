package com.poweremabox.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Session.class)
public abstract class Session_ {

	public static volatile SingularAttribute<Session, String> descriptionContentType;
	public static volatile SetAttribute<Session, Speaker> speakers;
	public static volatile SingularAttribute<Session, byte[]> description;
	public static volatile SingularAttribute<Session, ZonedDateTime> startTime;
	public static volatile SingularAttribute<Session, Long> id;
	public static volatile SingularAttribute<Session, ZonedDateTime> endTime;
	public static volatile SingularAttribute<Session, String> title;

	public static final String DESCRIPTION_CONTENT_TYPE = "descriptionContentType";
	public static final String SPEAKERS = "speakers";
	public static final String DESCRIPTION = "description";
	public static final String START_TIME = "startTime";
	public static final String ID = "id";
	public static final String END_TIME = "endTime";
	public static final String TITLE = "title";

}

