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

const CustRequestCategoryResponseType = new GraphQLObjectType({
  name: 'CustRequestCategoryResponseType',
  description: 'response type for CustRequestCategory',

  fields: () => ({
    custRequestCategoryId: {type: GraphQLString},
    custRequestTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CustRequestCategoryResponseType};
    