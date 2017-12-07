
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WebUserPreferenceType} from '../content/WebUserPreferenceType.js';


const WebPreferenceTypeType = new GraphQLObjectType({
  name: 'WebPreferenceTypeType',
  description: 'Type for WebPreferenceType in content',

  fields: () => ({
    webPreferenceTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    webUserPreference: {
      type: new GraphQLList(WebUserPreferenceType),
      args : {webPreferenceTypeId: {type: GraphQLString}},
      resolve: (webPreferenceType, args, {loaders}) => loaders.ofbizArray.load(`webUserPreferences/find?webPreferenceTypeId=${webPreferenceType.webPreferenceTypeId}`)
    }
  })
});

export {WebPreferenceTypeType};
    