
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


const ContentAssocTypeType = new GraphQLObjectType({
  name: 'ContentAssocTypeType',
  description: 'Type for ContentAssocType in content',

  fields: () => ({
    contentAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    contentAssocs: {
      type: new GraphQLList(ContentAssocType),
      args : {contentAssocTypeId: {type: GraphQLString}},
      resolve: (contentAssocType, args, {loaders}) => loaders.ofbizArray.load(`contentAssocs/find?contentAssocTypeId=${contentAssocType.contentAssocTypeId}`)
    }
  })
});

export {ContentAssocTypeType};
    




const ContentAssocTypeInputType = new GraphQLInputObjectType({
  name: 'ContentAssocTypeInputType',
  description: 'input type for ContentAssocType in content',

  fields: () => ({
    contentAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentAssocTypeInputType};
    