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

const DataResourceTypeAttrResponseType = new GraphQLObjectType({
  name: 'DataResourceTypeAttrResponseType',
  description: 'response type for DataResourceTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    dataResourceTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {DataResourceTypeAttrResponseType};
    