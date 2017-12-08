
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

import {ContentType} from '../content/Content.js';
import {DataResourceType} from '../content/DataResource.js';


const CharacterSetType = new GraphQLObjectType({
  name: 'CharacterSetType',
  description: 'Type for CharacterSet in content',

  fields: () => ({
    description: {type: GraphQLString},
    characterSetId: {type: GraphQLString},
    contents: {
      type: new GraphQLList(ContentType),
      args : {characterSetId: {type: GraphQLString}},
      resolve: (characterSet, args, {loaders}) => loaders.ofbizArray.load(`contents/find?characterSetId=${characterSet.characterSetId}`)
    },
    dataResources: {
      type: new GraphQLList(DataResourceType),
      args : {characterSetId: {type: GraphQLString}},
      resolve: (characterSet, args, {loaders}) => loaders.ofbizArray.load(`dataResources/find?characterSetId=${characterSet.characterSetId}`)
    }
  })
});

export {CharacterSetType};
    




const CharacterSetInputType = new GraphQLInputObjectType({
  name: 'CharacterSetInputType',
  description: 'input type for CharacterSet in content',

  fields: () => ({
    description: {type: GraphQLString},
    characterSetId: {type: GraphQLString}
  })
});

export {CharacterSetInputType};
    