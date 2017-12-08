
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

import {SegmentGroupRoleType} from '../marketing/SegmentGroupRole.js';
import {SegmentGroupTypeType} from '../marketing/SegmentGroupType.js';
import {SegmentGroupGeoType} from '../marketing/SegmentGroupGeo.js';
import {ProductStoreType} from '../product/ProductStore.js';
import {SegmentGroupClassificationType} from '../marketing/SegmentGroupClassification.js';


const SegmentGroupType = new GraphQLObjectType({
  name: 'SegmentGroupType',
  description: 'Type for SegmentGroup in marketing',

  fields: () => ({
    description: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${segmentGroup.productStoreId}`)
    },
    segmentGroupType: {
      type: SegmentGroupTypeType,
      args : {segmentGroupTypeId: {type: GraphQLString}},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbiz.load(`segmentGroupTypes/find?segmentGroupTypeId=${segmentGroup.segmentGroupTypeId}`)
    },
    segmentGroupRoles: {
      type: new GraphQLList(SegmentGroupRoleType),
      args : {segmentGroupId: {type: GraphQLString}},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbizArray.load(`segmentGroupRoles/find?segmentGroupId=${segmentGroup.segmentGroupId}`)
    },
    segmentGroupClassifications: {
      type: new GraphQLList(SegmentGroupClassificationType),
      args : {segmentGroupId: {type: GraphQLString}},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbizArray.load(`segmentGroupClassifications/find?segmentGroupId=${segmentGroup.segmentGroupId}`)
    },
    segmentGroupGeos: {
      type: new GraphQLList(SegmentGroupGeoType),
      args : {segmentGroupId: {type: GraphQLString}},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbizArray.load(`segmentGroupGeos/find?segmentGroupId=${segmentGroup.segmentGroupId}`)
    }
  })
});

export {SegmentGroupType};
    




const SegmentGroupInputType = new GraphQLInputObjectType({
  name: 'SegmentGroupInputType',
  description: 'input type for SegmentGroup in marketing',

  fields: () => ({
    description: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    segmentGroupTypeId: {type: GraphQLString}
  })
});

export {SegmentGroupInputType};
    