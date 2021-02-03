import { Document, SchemaDefinitionProperty } from 'mongoose';


export type ModelDefinition<M = undefined> = M extends undefined
  ? {
    [path: string]: SchemaDefinitionProperty;
  }
  : {
    [path in keyof M]-?: M[path] extends Array<infer U> ?
    Array<SchemaDefinitionProperty> :
    SchemaDefinitionProperty
  };

export type ModelDocument<M> = M & Document