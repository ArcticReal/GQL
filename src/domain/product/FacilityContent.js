
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
import {FacilityType} from '../product/Facility.js';


const FacilityContentType = new GraphQLObjectType({
  name: 'FacilityContentType',
  description: 'Type for FacilityContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityContent, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${facilityContent.facilityId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (facilityContent, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${facilityContent.contentId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContentType};
    




const FacilityContentInputType = new GraphQLInputObjectType({
  name: 'FacilityContentInputType',
  description: 'input type for FacilityContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContentInputType};
    