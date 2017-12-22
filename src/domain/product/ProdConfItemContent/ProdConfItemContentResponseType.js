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

const ProdConfItemContentResponseType = new GraphQLObjectType({
  name: 'ProdConfItemContentResponseType',
  description: 'response type for ProdConfItemContent',

  fields: () => ({
    confItemContentTypeId: {type: GraphQLString},
    configItemId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProdConfItemContentResponseType};
    