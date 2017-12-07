
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


const ContentAssocTypeType = new GraphQLObjectType({
  name: 'ContentAssocTypeType',
  description: 'Type for ContentAssocType in content',

  fields: () => ({
    contentAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    contentAssoc: {
      type: new GraphQLList(ContentAssocType),
      args : {contentAssocTypeId: {type: GraphQLString}},
      resolve: (contentAssocType, args, {loaders}) => loaders.ofbizArray.load(`contentAssocs/find?contentAssocTypeId=${contentAssocType.contentAssocTypeId}`)
    }
  })
});

export {ContentAssocTypeType};
    