import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const DataResourceAttributeResponseType = new GraphQLObjectType({
  name: 'DataResourceAttributeResponseType',
  description: 'response type for DataResourceAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    dataResourceId: {type: GraphQLString}
  })
});

export {DataResourceAttributeResponseType};
    