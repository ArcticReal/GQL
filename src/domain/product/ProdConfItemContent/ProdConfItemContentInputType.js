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

const ProdConfItemContentInputType = new GraphQLInputObjectType({
  name: 'ProdConfItemContentInputType',
  description: 'input type for ProdConfItemContent',

  fields: () => ({
    confItemContentTypeId: {type: GraphQLString},
    configItemId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProdConfItemContentInputType};
    