package com.poweremabox.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Speaker.class)
public abstract class Speaker_ {

	public static volatile SingularAttribute<Speaker, String> firstName;
	public static volatile SingularAttribute<Speaker, String> twitter;
	public static volatile SetAttribute<Speaker, Session> sessions;
	public static volatile SingularAttribute<Speaker, String> bio;
	public static volatile SingularAttribute<Speaker, Long> id;
	public static volatile SingularAttribute<Speaker, String> sureName;
	public static volatile SingularAttribute<Speaker, String> email;

	public static final String FIRST_NAME = "firstName";
	public static final String TWITTER = "twitter";
	public static final String SESSIONS = "sessions";
	public static final String BIO = "bio";
	public static final String ID = "id";
	public static final String SURE_NAME = "sureName";
	public static final String EMAIL = "email";

}

