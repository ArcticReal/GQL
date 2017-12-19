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

const DataResourceAttributeInputType = new GraphQLInputObjectType({
  name: 'DataResourceAttributeInputType',
  description: 'input type for DataResourceAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    dataResourceId: {type: GraphQLString}
  })
});

export {DataResourceAttributeInputType};
    