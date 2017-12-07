
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentAssocType} from '../content/ContentAssocType.js';


const ContentAssocPredicateType = new GraphQLObjectType({
  name: 'ContentAssocPredicateType',
  description: 'Type for ContentAssocPredicate in content',

  fields: () => ({
    contentAssocPredicateId: {type: GraphQLString},
    description: {type: GraphQLString},
    contentAssoc: {
      type: new GraphQLList(ContentAssocType),
      args : {contentAssocPredicateId: {type: GraphQLString}},
      resolve: (contentAssocPredicate, args, {loaders}) => loaders.ofbizArray.load(`contentAssocs/find?contentAssocPredicateId=${contentAssocPredicate.contentAssocPredicateId}`)
    }
  })
});

export {ContentAssocPredicateType};
    