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

const CustRequestTypeAttrResponseType = new GraphQLObjectType({
  name: 'CustRequestTypeAttrResponseType',
  description: 'response type for CustRequestTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    custRequestTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CustRequestTypeAttrResponseType};
    