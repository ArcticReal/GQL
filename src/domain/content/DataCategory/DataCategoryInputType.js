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

const DataCategoryInputType = new GraphQLInputObjectType({
  name: 'DataCategoryInputType',
  description: 'input type for DataCategory',

  fields: () => ({
    categoryName: {type: GraphQLString},
    dataCategoryId: {type: GraphQLString},
    parentCategoryId: {type: GraphQLString}
  })
});

export {DataCategoryInputType};
    