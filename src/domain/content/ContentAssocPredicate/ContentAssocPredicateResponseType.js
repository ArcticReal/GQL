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

const ContentAssocPredicateResponseType = new GraphQLObjectType({
  name: 'ContentAssocPredicateResponseType',
  description: 'response type for ContentAssocPredicate',

  fields: () => ({
    contentAssocPredicateId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentAssocPredicateResponseType};
    