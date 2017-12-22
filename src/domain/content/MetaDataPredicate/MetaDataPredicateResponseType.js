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

const MetaDataPredicateResponseType = new GraphQLObjectType({
  name: 'MetaDataPredicateResponseType',
  description: 'response type for MetaDataPredicate',

  fields: () => ({
    description: {type: GraphQLString},
    metaDataPredicateId: {type: GraphQLString}
  })
});

export {MetaDataPredicateResponseType};
    