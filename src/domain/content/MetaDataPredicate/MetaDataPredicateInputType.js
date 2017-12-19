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

const MetaDataPredicateInputType = new GraphQLInputObjectType({
  name: 'MetaDataPredicateInputType',
  description: 'input type for MetaDataPredicate',

  fields: () => ({
    description: {type: GraphQLString},
    metaDataPredicateId: {type: GraphQLString}
  })
});

export {MetaDataPredicateInputType};
    