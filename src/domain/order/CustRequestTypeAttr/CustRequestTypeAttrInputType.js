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

const CustRequestTypeAttrInputType = new GraphQLInputObjectType({
  name: 'CustRequestTypeAttrInputType',
  description: 'input type for CustRequestTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    custRequestTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CustRequestTypeAttrInputType};
    