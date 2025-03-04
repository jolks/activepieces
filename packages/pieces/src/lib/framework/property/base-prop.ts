export type BasePropertySchema = {
	displayName: string;
	description?: string;
	required: boolean;
};

export enum PropertyType {
	SHORT_TEXT = 'SHORT_TEXT',
	LONG_TEXT = 'LONG_TEXT',
	DROPDOWN = 'DROPDOWN',
	NUMBER = 'NUMBER',
	CHECKBOX = 'CHECKBOX',
	OAUTH2 = 'OAUTH2',
	SECRET_TEXT = 'SECRET_TEXT',
	ARRAY = 'ARRAY',
	OBJECT = 'OBJECT',
	BASIC_AUTH = "BASIC_AUTH",
	JSON = 'JSON',
}

export type TPropertyValue<T, U> = {
	valueSchema: T | undefined
	type: U;
}

export interface ShortTextProperty extends BasePropertySchema, TPropertyValue<string, PropertyType.SHORT_TEXT> { }

export interface LongTextProperty extends BasePropertySchema, TPropertyValue<string, PropertyType.LONG_TEXT> { }

export interface SecretTextProperty extends BasePropertySchema, TPropertyValue<string, PropertyType.SECRET_TEXT> { }

export interface CheckboxProperty extends BasePropertySchema, TPropertyValue<boolean, PropertyType.CHECKBOX> { }

export interface NumberProperty extends BasePropertySchema, TPropertyValue<number, PropertyType.NUMBER> { }

export interface ArrayProperty extends BasePropertySchema, TPropertyValue<unknown[], PropertyType.ARRAY> { }

export interface ObjectProperty extends BasePropertySchema, TPropertyValue<Record<string, unknown>, PropertyType.OBJECT> { }

export interface JsonProperty extends BasePropertySchema, TPropertyValue<Record<string, unknown>, PropertyType.JSON> { }
