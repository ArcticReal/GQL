
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

import {ContentAssocType} from '../../content/ContentAssoc/ContentAssocType.js';


const ContentAssocTypeType = new GraphQLObjectType({
  name: 'ContentAssocTypeType',
  description: 'Type for ContentAssocType in content',

  fields: () => ({
    contentAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    contentAssocs: {
      type: new GraphQLList(ContentAssocType),
      args : {},
      resolve: (contentAssocType, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentAssocs/find?contentAssocTypeId=${contentAssocType.contentAssocTypeId}`)
    }
  })
});

export {ContentAssocTypeType};
    