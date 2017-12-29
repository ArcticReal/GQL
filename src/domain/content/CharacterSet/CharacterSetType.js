
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

import {ContentType} from '../../content/Content/ContentType.js';
import {DataResourceType} from '../../content/DataResource/DataResourceType.js';


const CharacterSetType = new GraphQLObjectType({
  name: 'CharacterSetType',
  description: 'Type for CharacterSet in content',

  fields: () => ({
    description: {type: GraphQLString},
    characterSetId: {type: GraphQLString},
    contents: {
      type: new GraphQLList(ContentType),
      args : {},
      resolve: (characterSet, args, {loaders}) => loaders.ofbizArray.load(`contents/find?characterSetId=${characterSet.characterSetId}`)
    },
    dataResources: {
      type: new GraphQLList(DataResourceType),
      args : {},
      resolve: (characterSet, args, {loaders}) => loaders.ofbizArray.load(`content/dataResources/find?characterSetId=${characterSet.characterSetId}`)
    }
  })
});

export {CharacterSetType};
    