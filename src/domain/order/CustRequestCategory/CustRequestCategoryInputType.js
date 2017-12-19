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

const CustRequestCategoryInputType = new GraphQLInputObjectType({
  name: 'CustRequestCategoryInputType',
  description: 'input type for CustRequestCategory',

  fields: () => ({
    custRequestCategoryId: {type: GraphQLString},
    custRequestTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CustRequestCategoryInputType};
    