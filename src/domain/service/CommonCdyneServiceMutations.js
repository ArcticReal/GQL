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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const cdynePostalAddressFillInCounty = {
  type: ResponseType,
  description: 'mutation for ofbiz cdynePostalAddressFillInCounty method',
  args:{contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonCdyne/cdynePostalAddressFillInCounty?contactMechId=${args.contactMechId}`, null, req);
  }
};
export {cdynePostalAddressFillInCounty};


const cdyneReturnCityState = {
  type: ResponseType,
  description: 'mutation for ofbiz cdyneReturnCityState method',
  args:{zipcode: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonCdyne/cdyneReturnCityState?zipcode=${args.zipcode}`, null, req);
  }
};
export {cdyneReturnCityState};
