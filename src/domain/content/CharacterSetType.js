
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentType} from '../content/ContentType.js';
import {DataResourceType} from '../content/DataResourceType.js';


const CharacterSetType = new GraphQLObjectType({
  name: 'CharacterSetType',
  description: 'Type for CharacterSet in content',

  fields: () => ({
    description: {type: GraphQLString},
    characterSetId: {type: GraphQLString},
    content: {
      type: new GraphQLList(ContentType),
      args : {characterSetId: {type: GraphQLString}},
      resolve: (characterSet, args, {loaders}) => loaders.ofbizArray.load(`contents/find?characterSetId=${characterSet.characterSetId}`)
    },
    dataResource: {
      type: new GraphQLList(DataResourceType),
      args : {characterSetId: {type: GraphQLString}},
      resolve: (characterSet, args, {loaders}) => loaders.ofbizArray.load(`dataResources/find?characterSetId=${characterSet.characterSetId}`)
    }
  })
});

export {CharacterSetType};
    