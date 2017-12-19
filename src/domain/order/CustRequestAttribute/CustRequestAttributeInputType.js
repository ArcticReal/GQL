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

const CustRequestAttributeInputType = new GraphQLInputObjectType({
  name: 'CustRequestAttributeInputType',
  description: 'input type for CustRequestAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    custRequestId: {type: GraphQLString}
  })
});

export {CustRequestAttributeInputType};
    