
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

import {WebUserPreferenceType} from '../content/WebUserPreference.js';


const WebPreferenceTypeType = new GraphQLObjectType({
  name: 'WebPreferenceTypeType',
  description: 'Type for WebPreferenceType in content',

  fields: () => ({
    webPreferenceTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    webUserPreferences: {
      type: new GraphQLList(WebUserPreferenceType),
      args : {},
      resolve: (webPreferenceType, args, {loaders}) => loaders.ofbizArray.load(`content/webUserPreferences/find?webPreferenceTypeId=${webPreferenceType.webPreferenceTypeId}`)
    }
  })
});

export {WebPreferenceTypeType};
    




const WebPreferenceTypeInputType = new GraphQLInputObjectType({
  name: 'WebPreferenceTypeInputType',
  description: 'input type for WebPreferenceType in content',

  fields: () => ({
    webPreferenceTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {WebPreferenceTypeInputType};
    