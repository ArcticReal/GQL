
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

import {DataResourceType} from '../content/DataResource.js';


const DataTemplateTypeType = new GraphQLObjectType({
  name: 'DataTemplateTypeType',
  description: 'Type for DataTemplateType in content',

  fields: () => ({
    extension: {type: GraphQLString},
    dataTemplateTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    dataResources: {
      type: new GraphQLList(DataResourceType),
      args : {},
      resolve: (dataTemplateType, args, {loaders}) => loaders.ofbizArray.load(`content/dataResources/find?dataTemplateTypeId=${dataTemplateType.dataTemplateTypeId}`)
    }
  })
});

export {DataTemplateTypeType};
    




const DataTemplateTypeInputType = new GraphQLInputObjectType({
  name: 'DataTemplateTypeInputType',
  description: 'input type for DataTemplateType',

  fields: () => ({
    dataTemplateTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    extension: {type: GraphQLString}
  })
});

export {DataTemplateTypeInputType};
    