
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
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${segmentGroup.productStoreId}`)
    },
    segmentGroupType: {
      type: SegmentGroupTypeType,
      args : {segmentGroupTypeId: {type: GraphQLString}},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbiz.load(`marketing/segmentGroup/segmentGroupTypes/find?segmentGroupTypeId=${segmentGroup.segmentGroupTypeId}`)
    },
    segmentGroupRoles: {
      type: new GraphQLList(SegmentGroupRoleType),
      args : {},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbizArray.load(`marketing/segmentGroup/segmentGroupRoles/find?segmentGroupId=${segmentGroup.segmentGroupId}`)
    },
    segmentGroupClassifications: {
      type: new GraphQLList(SegmentGroupClassificationType),
      args : {},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbizArray.load(`marketing/segmentGroup/segmentGroupClassifications/find?segmentGroupId=${segmentGroup.segmentGroupId}`)
    },
    segmentGroupGeos: {
      type: new GraphQLList(SegmentGroupGeoType),
      args : {},
      resolve: (segmentGroup, args, {loaders}) => loaders.ofbizArray.load(`marketing/segmentGroup/segmentGroupGeos/find?segmentGroupId=${segmentGroup.segmentGroupId}`)
    }
  })
});

export {SegmentGroupType};
    




const SegmentGroupInputType = new GraphQLInputObjectType({
  name: 'SegmentGroupInputType',
  description: 'input type for SegmentGroup',

  fields: () => ({
    description: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    segmentGroupId: {type: GraphQLString},
    segmentGroupTypeId: {type: GraphQLString}
  })
});

export {SegmentGroupInputType};
    