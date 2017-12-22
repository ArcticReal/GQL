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

const CustRequestAttributeResponseType = new GraphQLObjectType({
  name: 'CustRequestAttributeResponseType',
  description: 'response type for CustRequestAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    custRequestId: {type: GraphQLString}
  })
});

export {CustRequestAttributeResponseType};
    