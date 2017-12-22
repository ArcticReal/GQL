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

const DataCategoryResponseType = new GraphQLObjectType({
  name: 'DataCategoryResponseType',
  description: 'response type for DataCategory',

  fields: () => ({
    categoryName: {type: GraphQLString},
    dataCategoryId: {type: GraphQLString},
    parentCategoryId: {type: GraphQLString}
  })
});

export {DataCategoryResponseType};
    