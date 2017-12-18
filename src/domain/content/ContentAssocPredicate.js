
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

import {ContentAssocType} from '../content/ContentAssoc.js';


const ContentAssocPredicateType = new GraphQLObjectType({
  name: 'ContentAssocPredicateType',
  description: 'Type for ContentAssocPredicate in content',

  fields: () => ({
    contentAssocPredicateId: {type: GraphQLString},
    description: {type: GraphQLString},
    contentAssocs: {
      type: new GraphQLList(ContentAssocType),
      args : {},
      resolve: (contentAssocPredicate, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentAssocs/find?contentAssocPredicateId=${contentAssocPredicate.contentAssocPredicateId}`)
    }
  })
});

export {ContentAssocPredicateType};
    




const ContentAssocPredicateInputType = new GraphQLInputObjectType({
  name: 'ContentAssocPredicateInputType',
  description: 'input type for ContentAssocPredicate',

  fields: () => ({
    contentAssocPredicateId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentAssocPredicateInputType};
    