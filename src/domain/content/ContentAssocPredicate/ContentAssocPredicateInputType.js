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

const ContentAssocPredicateInputType = new GraphQLInputObjectType({
  name: 'ContentAssocPredicateInputType',
  description: 'input type for ContentAssocPredicate',

  fields: () => ({
    contentAssocPredicateId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentAssocPredicateInputType};
    