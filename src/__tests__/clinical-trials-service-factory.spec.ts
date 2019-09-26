import { ClinicalTrialsServiceFactory } from '../clinical-trials-service-factory';
import {ClinicalTrialsService} from '../clinical-trials-service'
import { ClinicalTrialsServiceV1Impl } from '../v1/clinical-trials-service-v1-impl';

describe('Services.ClinicalTrials.ClinicalTrialsServiceFactory', () => {

    describe('create', () => {

        it('should return v1 instance with correct name', () => {
            let svc:ClinicalTrialsService = ClinicalTrialsServiceFactory.create('myhostname');

            //Make sure it returned a v1 impl
            expect(svc instanceof ClinicalTrialsServiceV1Impl).toBe(true);
            
            //TODO: Figure out if we can get to the CTAPIConnectionV1Impl object, or inspect the constructor params.
        });

        it('should return error for unsupported version', () => {
            expect(()=> {
                let svc:ClinicalTrialsService = ClinicalTrialsServiceFactory.create('myhostname', 'vX');
            }).toThrow('You must specify a valid Clinical Trials Service version');            
        });
        
    });
});